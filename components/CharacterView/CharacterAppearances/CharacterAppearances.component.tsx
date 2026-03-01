import { overridable } from "@core/lib/overridable";
import { Select } from "antd";
import { Link } from "react-router-dom";
import { CharacterAppearancesProps } from "./CharacterAppearances.d";
import styles from './CharacterAppearances.module.scss';

export const CharacterAppearancesComponent = overridable(({
    pages, goToPage,
    arcs, goToArc,
    classes = styles
}: CharacterAppearancesProps) => <div className={classes.characterAppearances}>
        {pages.length > 0 && <>
            <table>
                <tr>
                    <th>First appearance:</th>
                    <td><Link to={`/comic/page/${pages[0].page?.url}`}>Page {pages[0].pageNumber} - {pages[0].page?.name || 'Untitled'}</Link></td>
                </tr>
                <tr>
                    <th>Most recent appearance:</th>
                    <td><Link to={`/comic/page/${pages[pages.length - 1].page?.url}`}>Page {pages[pages.length - 1].pageNumber} - {pages[pages.length - 1].page?.name || 'Untitled'}</Link></td>
                </tr>
                <tr>
                    <th>Total appearances:</th>
                    <td>{pages.length} pages</td>
                </tr>
            </table>
            <Select
                style={{ width: '100%' }}
                placeholder="All appearances"
                onChange={goToPage}
                options={pages.map(p => ({
                    value: p.page?.url || '',
                    label: `Page ${p.pageNumber} - ${p.page?.name || 'Untitled'}`,
                }))}
            />

        </>}
        {arcs.length > 0 && <>
            <table>
                <tr>
                    <th>First appearance:</th>
                    <td><Link to={`/comic/arc/${arcs[0].arc?.url}`}>{arcs[0].typeName} {arcs[0].arcNumber} - {arcs[0].arc?.name || 'Untitled'}</Link></td>
                </tr>
                <tr>
                    <th>Most recent appearance:</th>
                    <td><Link to={`/comic/arc/${arcs[arcs.length - 1].arc?.url}`}>{arcs[arcs.length - 1].typeName} {arcs[arcs.length - 1].arcNumber} - {arcs[arcs.length - 1].arc?.name || 'Untitled'}</Link></td>
                </tr>
                <tr>
                    <th>Total appearances:</th>
                    <td>{arcs.length} arcs</td>
                </tr>
            </table>
            <Select
                style={{ width: '100%' }}
                placeholder="All appearances"
                onChange={goToArc}
                options={arcs.map(a => ({
                    value: a.arc?.url || '',
                    label: `${a.typeName} ${a.arcNumber} - ${a.arc?.name || 'Untitled'}`,
                }))}
            />
        </>}
    </div>);
