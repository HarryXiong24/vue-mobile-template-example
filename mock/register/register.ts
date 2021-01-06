import { success, fail } from './data';
export let registerServe = (options: any) => {
  
  let body = JSON.parse(options.body)
  
  console.log(options)
  console.log(body)

  if (body.username === "harry") {
    return fail
  } else if (body.username === "junny") {
    return fail
  } else {
    return success
  }  
  
}