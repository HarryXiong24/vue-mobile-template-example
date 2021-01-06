import { admin, user, error } from './data';

export let loginServer = (options: any) => {
  
  let body = JSON.parse(options.body)

  if (body.username === "harry" && body.password === "123456") {
    return admin
  } else if (body.username === "junny" && body.password === "123456") {
    return user
  } else {
    return error
  }

}
