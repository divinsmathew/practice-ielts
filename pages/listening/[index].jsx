import Listening from "./index";
import { useRouter } from "next/router";

const ListeningWrapper = () => {
    const { query } = useRouter();
    let testId = query.index;
    return <Listening testId={testId} />;
};

export default ListeningWrapper;
