import { Random } from 'mockjs';
import { captcha } from './data';

export let captchaServer = (options: any) => {
  options.headers = {
    captcha: Random.string(16)
  }

  return captcha
}
