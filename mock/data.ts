import { Random } from 'mockjs';
import svg from './img/captcha.svg'

export const captcha = svg

export const user = {
  success: true,
  token: Random.string(16),
  user: {
    name: Random.cname(),
    age: Random.integer(20, 50)
  }
}