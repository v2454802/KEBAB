type = 'text/javascript';
ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map('map', {
    center: [55.75, 37.61],
    zoom: 12,
    controls: [
      'zoomControl', // Ползунок масштаба
      'rulerControl', // Линейка
      'routeButtonControl', // Панель маршрутизации
      'trafficControl', // Пробки
      'typeSelector', // Переключатель слоев карты
      'fullscreenControl', // Полноэкранный режим
      new ymaps.control.SearchControl({
        options: {
          size: 'large',
          provider: 'yandex#search',
        },
      }),
    ],
  });
  /*
  const marksRes = async () => {
    await fetch('db', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        coardinate: coardinate.value,
        hint: hintContent.value,
        cocontent: balloonContent.value
      })
    })
  }
  const marks = await marksRes.json()
  marks.foreach((el)=>{
    myMap.geoObjects.add(new ymaps.Placemark(
      el.coardinate, // [55.758859, 37.744306]
      hintContent: el.hint,
      ballonContent: el.content
    ))
  })
  */
  const myPlacemark = new ymaps.Placemark([55.71, 37.60], {
    // Хинт показывается при наведении мышкой на иконку метки.
    hintContent: 'Эльбрус',
    // Балун откроется при клике по метке.
    balloonContent: 'Новое содержимое',
    a: 'Новое содержимое',
  });
  const twoPlacemark = new ymaps.Placemark([55.758859, 37.744306], {
    // Хинт показывается при наведении мышкой на иконку метки.
    hintContent: 'ТЦ Буденовский',
    // Балун откроется при клике по метке.
    balloonContent: 'Содержимое балуна',
  });

  // После того как метка была создана, добавляем её на карту.
  myMap.geoObjects.add(myPlacemark);
}
