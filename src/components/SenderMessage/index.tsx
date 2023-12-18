import { useSearchParams } from "next/navigation";
import { decodeText } from "@utils";
import styles from "@styles/SenderMessage.module.scss";

const SenderMessage = () => {
  const searchParams = useSearchParams();

  const encodedSenderMessage = searchParams.get("sm")!;
  const senderMessage = decodeText(encodedSenderMessage);

  return <span className={styles.messageText}> {senderMessage} </span>;
};

export default SenderMessage;
