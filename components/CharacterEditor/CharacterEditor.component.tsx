import { Editable } from "@core/components/Editable";
import {CharacterEditorProps} from "./CharacterEditor.d";
import styles from './CharacterEditor.module.scss';
import { Label } from "@core/components/Label";
import { MarkdownEditor } from "@core/components/MarkdownEditor";
import { Card, Col, Row, Switch } from "antd";
import { CharacterMediaEditor } from "../CharacterMediaEditor";
import { CharacterAttributeEditor } from "../CharacterAttributeEditor";

export const CharacterEditorComponent = ({
    history:{entity:char},
    updateString, updateToggle,
    UpdateButtons,
}:CharacterEditorProps) =>
    <div className={styles.characterEditor}>
        <div className={styles.actions}><UpdateButtons /></div>
        <Row gutter={[16, 16]}>
            <Col xs={12}>
                <h1><Label label="Name">
                    <Editable value={char.name} onChange={updateString("name")} />
                </Label></h1>
                <Switch checked={char.enabled}     onChange={updateToggle("enabled")}     checkedChildren="Enabled"      unCheckedChildren="Disabled"     />
                &nbsp;
                <Switch checked={char.showDetails} onChange={updateToggle("showDetails")} checkedChildren="Show Details" unCheckedChildren="Hide Details" />
                <br/><br/>
                <Card size="small" title="Bio">
                    <MarkdownEditor value={char.bio || ""} onChange={updateString("bio")} />
                </Card>
            </Col>
            <Col xs={12}>
                <Card size="small" title="Attributes">
                    <CharacterAttributeEditor characterId={char.id} />
                </Card>
            </Col>
            <Col xs={24}>
                <Card size="small" title="Images">
                    <CharacterMediaEditor character={char} update={updateString} />
                </Card>
            </Col>
        </Row>
    </div>;
