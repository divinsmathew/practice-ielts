import { LISTENING_TESTS } from "./constants";

import { useEffect } from "react";
import { useRouter } from "next/router";

import { getRandomIntegerInRange } from "components/utils";

const Listening = () => {
    const router = useRouter();
    useEffect(() => {
        const testId = router.query.index;
        if (!testId) {
            const keys = Object.keys(LISTENING_TESTS);
            const testId = keys[getRandomIntegerInRange(0, keys.length - 1)];
            router.push(`/listening/${testId}`, undefined, { shallow: true });
        }
    }, []);
};
export default Listening;
