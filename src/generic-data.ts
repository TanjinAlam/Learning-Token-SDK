import express, { Express, Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = 3000;

interface ZoomParticipant {
  id: string;
  name: string;
  user_email: string;
  join_time: string;
  leave_time: string;
}

interface ZoomParticipantsResponse {
  participants: ZoomParticipant[];
  page_count: number;
  page_size: number;
  total_records: number;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

async function getPastMeetingParticipants(
  baseUrl: string,
  meetingId: string,
  bearerToken: string
): Promise<ApiResponse<ZoomParticipantsResponse>> {
  try {
    const url = `${baseUrl}/past_meetings/${meetingId}/participants`;
    const response: AxiosResponse<ZoomParticipantsResponse> = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
      },
    });
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
}

function processParticipants(participants: ZoomParticipant[]): { name: string; email: string; joinTime: string; leaveTime: string }[] {
  return participants.map(participant => ({
    name: participant.name,
    email: participant.user_email,
    joinTime: participant.join_time,
    leaveTime: participant.leave_time,
  }));
}

function saveProcessedDataToFile(
  data: { meetingEventId: string; attendees: { name: string; email: string; joinTime: string; leaveTime: string }[] },
  outputPath: string
): void {
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.log(`Processed data has been saved to ${outputPath}`);
}

app.get('/fetch-and-process-data', async (req, res) => {
  const baseUrl = "https://api.zoom.us/v2";
  const meetingId = process.env.MEETING_ID || "82258262218";
  const bearerToken = process.env.BEARER_TOKEN || "eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6IjEyNTJkYzliLWFhM2ItNGI3Zi1hMDg2LTc1ZTliYmMyNjg5YiJ9.eyJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiIyZE5QTlpldVNUV1NtX212NG1BWGFnIiwidmVyIjoxMCwiYXVpZCI6IjcxYzlmZDZhMGYxMmJiZDU2MDAzOGU1YmVjNTU2OWUxZGI0YjczMDYyY2E5N2JmNDZiNTNjNjljMTk0MGFlNjYiLCJuYmYiOjE3MjcyODQ1ODcsImNvZGUiOiJGS2NNVk4zaVNNNkxDbldCa1M3bE9RSlhLWHJWVHVVSHMiLCJpc3MiOiJ6bTpjaWQ6YlJCZ0JTbEhSVE84aTdZUEZjd0JmdyIsImdubyI6MCwiZXhwIjoxNzI3Mjg4MTg3LCJ0eXBlIjozLCJpYXQiOjE3MjcyODQ1ODcsImFpZCI6ImpoRExrS2UtUkpxdzF2RDQ3dXdiX3cifQ.qMp0cs8v1CbAAasYnD3NB6tHX1ioowY3mJBAGGbQSyEBtnCN7g0VRaB8CNEewPLCbGT37Zu_BglAIIgNVf5iAg";
  const outputPath = path.join(__dirname, 'processed_data.json');

  try {
    // Fetch participants
    const participantsResponse = await getPastMeetingParticipants(baseUrl, meetingId, bearerToken);
    const participants = participantsResponse.data.participants;

    // Process participants
    const attendees = processParticipants(participants);

    // Prepare the final data
    const finalData = {
      meetingEventId: "event003",
      attendees,
    };

    // Save processed data to file
    saveProcessedDataToFile(finalData, outputPath);

    res.status(200).send('Data fetched and processed successfully.');
  } catch (error) {
    console.error('Error fetching and processing data:', error);
    res.status(500).send('An error occurred while fetching and processing data.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
