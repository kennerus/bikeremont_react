import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

const mapState = { center: [47.981258, 37.85223], zoom: 16 };

const AddressOnMap = () => {
  return (
    <div className={css(styles.map)}>
      <YMaps>
        <Map
          state={mapState}
          width={'100%'}
          height={'400px'}
        >

          <Placemark
            geometry={{
              type: 'Point',
              coordinates: [47.981258, 37.85223]
            }}
            properties={{
              hintContent: 'Украина, Донецк, Бессарабская улица, 24',
              balloonContent: 'Украина, Донецк, Бессарабская улица, 24',
              strokeColor: 'red',
              iconContent: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="position: relative; top: -3px; right: 2px;"><path fill="#808285" d="M3.14 18.06a.78.78 0 0 1 0-1.13l7.53-7.5-.33-.49a2.92 2.92 0 0 1 .33-3.7l1.62-1.62a2.35 2.35 0 0 1 3.4 0l.16.16-3.4 3.39 2.43 2.42 3.4-3.39.16.16a2.5 2.5 0 0 1 0 3.4l-1.62 1.6a3.06 3.06 0 0 1-3.73.33l-.48-.32-7.53 7.5a.79.79 0 0 1-1.13 0l-.81-.81z"/></svg>',
            }}
          />

        </Map>
      </YMaps>
    </div>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    marginTop: '30px',
  }
});

export default AddressOnMap;
