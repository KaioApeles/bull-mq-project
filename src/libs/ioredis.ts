import IORedis from 'ioredis';

const connection = new IORedis({
  port: 6379,
  host: 'localhost',
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
});

export default connection;
