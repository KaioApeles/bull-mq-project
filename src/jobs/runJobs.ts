import { QueueScheduler, Job } from 'bullmq';
import connection from '../libs/ioredis';
import simpleWorker from './testQueue';

const runSchedulerJobs = () => {
  new QueueScheduler('example', { connection });

  simpleWorker.on('completed', (job: Job) => {
    console.log(`[${job.id}] was completed`);
  });
};

export default runSchedulerJobs;
