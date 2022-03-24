import { Job, Worker } from 'bullmq';

const simpleWorker = new Worker(
  'example',
  async (job: Job) => {
    console.log(`[NEW JOB] => ${job.id}`);
    console.log('[data]', job.data);
  },
  {
    concurrency: 100,
  },
);

export default simpleWorker;
