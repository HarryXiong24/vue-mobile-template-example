import { Random } from 'mockjs';

function produceData(min: number, max: number, count: number): Array<number> {
  
  let arr: Array<number> = []
  for(let i = 0; i < count; i++) {
    arr.push(Random.integer(min, max));
  }

  return arr
}


export const lineData = {
  legend: ["复仇者联盟", "蝙蝠侠", "蜘蛛侠", "海上钢琴师", "赛尔号"],
  xAxis: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
  series: [
    {
      name: "复仇者联盟",
      type: "line",
      stack: "总量",
      data: produceData(200, 1200, 7),
    },
    {
      name: "蝙蝠侠",
      type: "line",
      stack: "总量",
      data: produceData(200, 1200, 7),
    },
    {
      name: "蜘蛛侠",
      type: "line",
      stack: "总量",
      data: produceData(200, 1200, 7),
    },
    {
      name: "海上钢琴师",
      type: "line",
      stack: "总量",
      data: produceData(200, 1200, 7),
    },
    {
      name: "赛尔号",
      type: "line",
      stack: "总量",
      data: produceData(200, 1200, 7),
    },
  ]
}