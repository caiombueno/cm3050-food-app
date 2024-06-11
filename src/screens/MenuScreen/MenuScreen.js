import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { ScrollView } from 'react-native';


export const MenuScreen = ({ route }) => {
    const items = route.params.items;

    const createCells = contents =>
        contents.map((content, index) => (
            <Cell key={index} title={content.title} />
        ));

    const createSections = items =>
        items.map((item, index) => (
            <Section key={index} header={item.title}>
                {createCells(item.contents)}
            </Section>
        ));


    const sections = createSections(items);

    return (
        <ScrollView>
            <TableView>
                {sections}
            </TableView>
        </ScrollView>
    );
};
