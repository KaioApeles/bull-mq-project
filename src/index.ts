/* eslint-disable no-plusplus */
import express, { Request, Response } from 'express';
import { Queue } from 'bullmq';
import connection from './libs/ioredis';
import runSchedulerJobs from './jobs/runJobs';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');

  const queue = new Queue('example', { connection });
  for (let i = 0; i <= 10000; i++) {
    queue.add(
      'title 1',
      { title: `lets GO ${Math.random()}` },
      {
        delay: 0,
        removeOnComplete: true,
        removeOnFail: true,
        // repeat: { every: 5000, limit: 5 },
      },
    );
  }
});

app.listen(3000, async () => {
  console.log('App Started on http://localhost:3000');
  runSchedulerJobs();
});
