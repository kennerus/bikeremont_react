import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import {repairedBikes} from "../../common/Images";


class RepairedBike extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  render() {
    const { fullSizeImg, thumbnailImg, vkLink, bgImg, text } = this.props;
    const { isOpen, photoIndex } = this.state;

    let getImageIndex = () => {
      // return repairedBikes.fullSizeImg.indexOf(this.props.repairedBikes.fullSizeImg);
      console.log(repairedBikes.findIndex(el => el.fullSizeImg === fullSizeImg));
      return repairedBikes.findIndex(el => el.fullSizeImg === fullSizeImg);
    };

    if (fullSizeImg && thumbnailImg) {
      return (
        <div className={css(styles.galleryBlock)}>
          <button
            className={css(styles.button)}
            type="button"
            onClick={() => {
              this.setState({
                photoIndex: getImageIndex(),
                isOpen: true
              });
              console.log(photoIndex)
            }}
          >
            <img
              src={thumbnailImg}
              alt=""
              className={css(styles.img)}
            />
          </button>

          {isOpen &&
            <Lightbox
              mainSrc={repairedBikes.fullSizeImg[photoIndex]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              nextSrc={repairedBikes.fullSizeImg[(photoIndex + 1) % repairedBikes.fullSizeImg.length]}
              prevSrc={repairedBikes.fullSizeImg[(photoIndex + repairedBikes.fullSizeImg.length - 1) % repairedBikes.fullSizeImg.length]}
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % repairedBikes.fullSizeImg.length
                })
              }
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + repairedBikes.fullSizeImg.length - 1) % repairedBikes.fullSizeImg.length
                })
              }

            />
          }
        </div>
      );
    } else {
      return (
        <div className={css(styles.galleryBlock)}>
          <a
            href={vkLink}
            className={css(styles.more)}
          >
            <img
              src={bgImg}
              alt=""
              className={css(styles.moreImg)}
            />
            <span className={css(styles.moreText)}>
            {text}
          </span>
          </a>
        </div>
      )
    }
  }
};

const styles = StyleSheet.create({
  galleryBlock: {
    position: 'relative',
    width: '24%',
    marginRight: '1%',
    fontSize: '0',
    backgroundColor: '#323235',
      ':nth-child(4n)': {
        marginRight: '0',
      },
      ':nth-child(n + 5)': {
        marginTop: '15px',
      },
  },
  button: {
    padding: '0',
    border: 'none',
    cursor: 'pointer',
    ':hover': {
      opacity: '0.9',
    }
  },
  img: {
    display: 'block',
    width: '100%',
  },
  more: {
    '::before': {
      content: "''",
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      ':hover': {
        opacity: '0.9',
      }
    }
  },
  moreImg: {
    width: '100%',
  },
  moreText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    fontFamily: 'Bebas Neue Bold',
    textTransform: 'uppercase',
    fontSize: '44px',
    color: 'white',
    textAlign: 'center',
  },
});

export default RepairedBike;
