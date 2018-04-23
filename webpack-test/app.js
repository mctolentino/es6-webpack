import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import {apiKey, url, sayHelloWorld} from './src/config';

import User, {createUrl, gravatar} from './src/user';

const user = new User('Maki Tolentino', 'maki.tolentino.03@gmail.com', 'maxdev.pro');

console.log(user);
console.log(createUrl(user.name));
console.log(gravatar(user.email));