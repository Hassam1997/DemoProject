import { Util } from "../utils";

class ShowUtil {
    id = (data) => data?.id ?? 123;

    image = (data) => data?.image?.medium ?? "";

    imageOriginal = (data) => data?.image?.original ?? "";

    name = (data) => data?.name ?? "Not Available"

    summary = (data) => data?.summary ?? ""

    rating = (data) => data?.rating?.average ?? 0

    genres = (data) => data?.genres ?? []

    episode_date = (data) => data?.airstamp ?? "2020-08-14T12:00:00+00:00"

    runtime = (data) => data?.runtime ?? 30

    season = (data) => data?.season ?? 1

    episode = (data) => data?.number ?? 1

    favourite = (data) => data?.favourite ?? false
}

export default new ShowUtil();
