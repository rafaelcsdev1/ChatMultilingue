import './config/env';
import app from './app';
import { PORT } from './config/env';

app.listen(PORT, () => {
  console.log(`Backend iniciado em http://localhost:${PORT}`);
});
