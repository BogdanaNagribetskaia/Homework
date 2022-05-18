const circleList = document.getElementsByClassName('js-circle');

const TRAFFIC = {
  RED: 'red',
  YELLOW: 'yellow',
  GREEN: 'green',
};

let activeTraffic = TRAFFIC.RED;

document.getElementById('js-toggle').addEventListener('click', () => {
  //Вытянули элемент из документа по айди.Навешиваем прослушку событий клик, при каждом клике запуск анонимной стрел фции, которая будет удалять класс эктив(фороф, потому что работаем с хтмл коллекцией)
  for (const circle of circleList) {
    circle.classList.remove('active');
  }

  switch (activeTraffic) {
    case TRAFFIC.RED:
      activeTraffic = TRAFFIC.YELLOW;
      circleList[1].classList.add('active');
      break;
    case TRAFFIC.YELLOW:
      activeTraffic = TRAFFIC.GREEN;
      circleList[2].classList.add('active');
      break;
    case TRAFFIC.GREEN:
      activeTraffic = TRAFFIC.RED;
      circleList[0].classList.add('active');
      break;
  }
});
export { circleList };
