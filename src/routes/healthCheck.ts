```typescript
import { Router, Request, Response } from 'express';

export const healthCheckRouter = Router();

healthCheckRouter.get('/', (req: Request, res: Response) => {
  res.status(200).send('OK');
});
```