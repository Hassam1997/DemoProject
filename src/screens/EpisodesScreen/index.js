import React from "react";
import { Block, Episodes } from "../../common";
import styles from "./styles";
import { NavigationService } from "../../utils";
import FlatListApi from "../../components/FlatListApi";
import { getEpisodesList, homeGetEpisodes } from "../../ducks/home";


const EpisodesScreen = () => {

    const renderItem = ({ item, index }) => {
        return (
            <Block style={styles.subContainer}>
                <Episodes
                    data={item}
                    chatModule={true}
                    onPress={() => {
                        NavigationService.navigate("EpisodeDetail", {
                            data: item,
                        });
                    }}
                />
            </Block>
        );
    };

    const renderSeperator = () => {
        return <Block style={styles.itemSeperator} />;
    };


    return (
        <Block style={styles.container}>
            <Block style={styles.listView}>
                <FlatListApi
                    payload={{
                        page: 1,
                        limit: 10,
                    }}
                    actionType={homeGetEpisodes.type}
                    selectorData={getEpisodesList}
                    requestAction={homeGetEpisodes.request}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => `${item.id}+${index}`}
                    style={styles.flatlistView}
                    ItemSeparatorComponent={renderSeperator}
                />
            </Block>
        </Block>
    );
};

export default EpisodesScreen;
