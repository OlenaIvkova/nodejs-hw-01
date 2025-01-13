// export const PATH_DB = '../db/db.json';

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const PATH_DB = path.resolve(__dirname, '../db/db.json');