import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

class SliderCard extends React.Component {
  state = {
    currentlyPlaying: null
  };
  playback(id) {
    var self = this;
    this.refs[id].onended = function() {
      self.setState({ currentlyPlaying: null });
    };
    if (this.refs[id].paused && this.state.currentlyPlaying === null) {
      this.refs[id].play();
      this.setState({ currentlyPlaying: id });
    } else if (this.refs[id].paused && this.state.currentlyPlaying !== id) {
      console.log("another video is currently playing");
    } else {
      this.refs[id].pause();
      this.setState({ currentlyPlaying: null });
    }
  }

  render() {
    return (
      <>
        {this.props.medias.map(media => (
          <div
            key={media.download_url}
            className={this.props.medias.length > 3 ? "card" : "card3"}
          >
            {media.media_type === "video" ? (
              <>
                <video
                  ref={media.download_url}
                  src={media.download_url}
                  onClick={() => this.playback(media.download_url)}
                  type="video/mp4"
                  className="cover-photo"
                  playsInline
                />
                {this.state.currentlyPlaying === media.download_url ? (
                  <></>
                ) : (
                  <div vid={media.download_url} className="overlay">
                    <FontAwesomeIcon
                      icon={faPlay}
                      size="2x"
                      color="#ffffff"
                      onClick={() => this.playback(media.download_url)}
                    />
                  </div>
                )}
              </>
            ) : (
              <img
                key={media.download_url}
                className="cover-photo"
                src={media.cover_photo_url}
                alt="Cover"
              />
            )}
            <br />
            <div className="buttons">
              <div className="cover-link chain">
                <CopyToClipboard
                  text={media.tracking_link}
                  onCopy={() => console.log(media.tracking_link)}
                >
                  <FontAwesomeIcon icon={faLink} color="#abb3b4" />
                </CopyToClipboard>
              </div>
              <div className="cover-link">
                <a href={media.download_url} download>
                  <FontAwesomeIcon icon={faDownload} color="#abb3b4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default SliderCard;
