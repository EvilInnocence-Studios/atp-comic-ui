import { Card, Transfer } from "antd";
import { CharacterAssignerProps } from "./CharacterAssigner.d";
import styles from './CharacterAssigner.module.scss';
import { overridable } from "@core/lib/overridable";

export const CharacterAssignerComponent = overridable(({ allCharacters, assigned, onChange, classes = styles }: CharacterAssignerProps) =>
    <Card size="small" title="Characters">
        <Transfer
            className={classes.characterAssigner}
            dataSource={allCharacters.map((c) => ({ key: c.id, title: c.name }))}
            titles={['Available', 'Assigned']}
            targetKeys={assigned.map((c) => c.id)}
            onChange={onChange}
            render={item => item.title}
            showSearch
            listStyle={{ width: '45%', height: 300 }}
            operations={['Assign', 'Unassign']}
        />
    </Card>
);
