import { LoginEffects } from './login-effect';
import { TokenEffects } from './token-effect';

export const effects: Array<any> = [LoginEffects, TokenEffects];

export * from './login-effect';
export * from './token-effect';
