import { ICharacterAttribute } from "@comic-shared/character/types";
import {CharacterAttributeEditorProps} from "./CharacterAttributeEditor.d";
import styles from './CharacterAttributeEditor.module.scss';
import { Editable } from "@core/components/Editable";
import { DeleteBtn } from "@core/components/DeleteBtn";
import { Button, Input, Space, Spin } from "antd";
import { SortableList } from "@core/components/SortableList";
import { prop } from "ts-functional";
import { onInputChange } from "@core/lib/onInputChange";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { overridable } from "@core/lib/overridable";

const attId = (link:ICharacterAttribute,  index:number) => `${link.id}:${index}`;

interface ILinkItemProps {
    update: (id: string, field: keyof ICharacterAttribute) => (value: string | null) => void;
    remove: (id: string) => () => void;
}

export const AttItem = overridable(({item:att, update, remove}:{item:ICharacterAttribute} & ILinkItemProps) => {
    return <div className={styles.att}>
        <Editable value={att.name} onChange={update(att.id, "name")} />
        <Editable value={att.value } onChange={update(att.id, "value" )} />
        <DeleteBtn entityType="attribute" onClick={remove(att.id)} />
    </div>;
});

export const CharacterAttributeEditorComponent = overridable(({
    attributes, isLoading,
    name, setName,
    value, setValue,
    create, update, remove, sort,
}:CharacterAttributeEditorProps) =>
    <Spin spinning={isLoading}>
        <SortableList<ICharacterAttribute, ILinkItemProps>
            items={attributes}
            getId={prop("id")}
            getListId={attId}
            sort={sort}
            ItemComponent={AttItem}
            itemProps={{update, remove}}
        />
        <Space.Compact style={{width: "100%"}}>
            <Input
                value={name}
                onChange={onInputChange(setName)}
                placeholder="Name"
                className={styles.newAttForm}
                onPressEnter={create}
            />
            <Input
                value={value}
                onChange={onInputChange(setValue)}
                placeholder="Value"
                className={styles.newAttForm}
                onPressEnter={create}
            />
            <Button onClick={create} variant="link"><FontAwesomeIcon icon={faAdd} /></Button>
        </Space.Compact>
    </Spin>
);
