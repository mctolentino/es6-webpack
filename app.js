import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';

const ages = [1, 1, 4, 52, 12, 3, 4];

console.log(uniq(ages));