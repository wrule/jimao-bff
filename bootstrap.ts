import { addAliases } from 'module-alias';

addAliases({
  '@': __dirname,
});

import { main } from '@/app';

main();
