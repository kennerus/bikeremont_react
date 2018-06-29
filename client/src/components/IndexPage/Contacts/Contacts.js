import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faMap from '@fortawesome/fontawesome-free-regular/faMap';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faCalendarAlt from '@fortawesome/fontawesome-free-regular/faCalendarAlt';
import { VK, Group } from 'react-vk';
import Title from "../Title";
import Contact from "./Contact";

// import VKWidget from "./VKWidget";

const Contacts = () => {
  return (
    <section className={css(styles.wrapper)}>
      <Title title={'Наши контакты'}/>
      
      <div className={css(styles.contacts)}>
        <ul className={css(styles.list)}>
          <Contact text="Работаем ежедневно с 9:00 до 17:00. Выходной понедельник.">
            <FontAwesomeIcon className={css(styles.icon)} icon={faCalendarAlt} />
          </Contact>

          <Contact text="г. Донецк, ул. Бессарабская 24, Будённовский район (остановка завод высоковольтных опор)">
            <FontAwesomeIcon className={css(styles.icon)} icon={faMap} />
          </Contact>

          <Contact text="Звоните нам: +38 (071) 437-93-15">
            <FontAwesomeIcon className={css(styles.icon)} icon={faPhone} />
          </Contact>
        </ul>

        <div className={css(styles.widget)}>
          <VK apiId={33973321}>
            <Group
              elementID={'vk_groups'}
              groupId={33973321}
              // options={mode: 3, no_cover: "1", width: "auto"}
            />
          </VK>
        </div>
      </div>
    </section>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: '90px',
  },
  contacts: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '60px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '49%',
    padding: '0',
  },
  widget: {
    width: '49%',
  },
  icon: {
    marginRight: '10px',
    fontSize: '18px',
  }
});
export default Contacts;
