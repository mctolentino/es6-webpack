import slug from 'slug';
import { url } from './config';
import md5 from 'md5';

export default function User(name, email, website) {
	return { name, email, website };
}

export function createUrl(name) {
	return `${url}/users/${slug(name)}`;
}

export function gravatar(email) {
	const hash = md5(email);
	const photoUrl = `https://www.gravatar.com/avatar/${hash}`;
	return photoUrl;
}