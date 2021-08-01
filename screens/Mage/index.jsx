import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardList } from "../../components/CardList";

export const Mage = ({ navigation }) => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    async function fetchData() {
      await axios(
        "https://us.api.blizzard.com/hearthstone/cards?locale=en_US&set=standard&class=mage&pageSize=77&sort=manaCost%3Aasc&access_token=UScs8hhS5oMQ04YnFZ7LWu0EZBfNDS8Yn3"
      )
        .then((response) => {
          if (response.status === 200) return response.data.cards;
          throw response.data.cards;
        })
        .then((apiData) => setCards(apiData))
        .catch((err) => console.error(err));
    }
    fetchData();
  }, []);
  return <CardList data={cards} navigation={navigation} />;
};
