
import axios from "axios";

export default axios.create({
      url: "https://api.twitch.tv/kraken/streams/",
      method: "get",
      headers: {
        "Client-ID": "9waailb8yicw5e7yk7b957179id9mn",
        "Accept": "application/vnd.twitchtv.v5+json",
      },
    });

