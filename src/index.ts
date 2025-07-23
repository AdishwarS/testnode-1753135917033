```typescript
import express from 'express';
import { healthCheckRouter } from './routes/healthCheck';

const app = express();
const port = process.env.PORT || 3000;

app.use('/health', healthCheckRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```