import { addAliases } from 'module-alias';

addAliases({
  '@': import.meta.dirname,
});

import { main } from '@/app';

main();
