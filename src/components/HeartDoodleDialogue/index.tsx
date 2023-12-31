import { Button, useToast } from "@chakra-ui/react";
import styles from '@styles/HeartDoodleDialogue.module.scss'

const HeardDoodleDialogue = () => {
    const toast = useToast();  

    const handleClick = async () => {
          return toast({
            title: `(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ This is just a preview of what your note will look like!`,
            duration: 2500,
            isClosable: true,
          });
      };

    return (
        <Button className={styles.dialogueButton} onClick={handleClick}>
        Psst.
        </Button>
    )

}

export default HeardDoodleDialogue;