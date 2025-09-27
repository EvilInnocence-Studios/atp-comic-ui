import { Card, Transfer } from "antd";
import {CharacterAssignerProps} from "./CharacterAssigner.d";
import styles from './CharacterAssigner.module.scss';

export const CharacterAssignerComponent = ({allCharacters, assigned, onChange}:CharacterAssignerProps) =>
    <Card size="small" title="Characters">
        <Transfer
            className={styles.characterAssigner}
            dataSource={allCharacters.map((c) => ({key: c.id, title: c.name}))}
            titles={['Available', 'Assigned']}
            targetKeys={assigned.map((c) => c.id)}
            onChange={onChange}
            render={item => item.title}
            showSearch
            listStyle={{width: '45%', height: 300}}
            operations={['Assign', 'Unassign']}
        />
    </Card>;
