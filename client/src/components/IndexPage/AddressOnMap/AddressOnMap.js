import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

const mapState = { center: [47.981258, 37.85223], zoom: 16 };

const AddressOnMap = () => {
  return (
    <section className={css(styles.map)}>
      <YMaps>
        <Map
          state={mapState}
          width={'100%'}
          height={'400px'}
        >

          <Placemark
            geometry={{
              type: 'Point',
              coordinates: [47.981258, 37.85223],
            }}
            properties={{
              hintContent: 'Украина, Донецк, Бессарабская улица, 24',
              balloonContent: 'Украина, Донецк, Бессарабская улица, 24',
            }}
            options={{
              preset: 'islands#redRepairShopIcon',
            }}
          />

        </Map>
      </YMaps>
    </section>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    marginTop: '30px',
  }
});

export default AddressOnMap;
