import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { createGrid } from '../src'

import { GridProps } from '../src'
export { GridProps }
import { GlamorousComponent } from 'glamorous'
export { GlamorousComponent }

const stories = storiesOf('Grid', module)

export const { Grid, Row, Column } = createGrid({
    maxWidth: 1200,
    initial: {
        gutter: [5, 10],
        margin: [20],
        wrap: true,
    },
    breakpoints: [
        {
            gutter: [10],
            margin: [50, 30],
            minWidth: 750,
            wrap: false,
        },
        {
            gutter: [10, 30, 15, 18],
            margin: [40, 50],
            minWidth: 970,
            wrap: false,
        },
    ],
})

const GridDocs = `
\`\`\`ts
createGrid({
    maxWidth: 1200,
    initial: {
        gutter: [5, 10],
        margin: [20],
        wrap: true,
    },
    breakpoints: [
        {
            gutter: [10],
            margin: [50, 30],
            minWidth: 750,
            wrap: false,
        },
        {
            gutter: [10, 30, 15, 18],
            margin: [40, 50],
            minWidth: 970,
            wrap: false,
        },
    ],
})
\`\`\`
`

stories.add(
    "Using a Grid",
    withInfo({
        header: true,
        inline: true,
        text: GridDocs,
        propTables: false,
    })(
        () => (
            <Grid
                css={{
                    background: 'gainsboro',
                }}
            >
                <Row
                    initial={{
                        alignment: 'right',
                    }}
                    css={{
                        background: 'darkgray',
                    }}
                >
                    <Column
                        initial={{
                            ratio: [1, 2],
                        }}
                        breakpoints={[
                            {ratio: [1, 2]},
                            {ratio: [1, 2]},
                        ]}
                        css={{
                            background: 'lightslategrey',
                        }}
                    >
                        Column 1
                    </Column>
                    <Column
                        initial={{
                            ratio: [1, 2],
                        }}
                        breakpoints={[
                            {ratio: [1, 2]},
                            {ratio: [1, 2]},
                        ]}
                        css={{
                            background: 'lightslategrey',
                        }}
                    >
                        Column 2
                    </Column>
                </Row>
                <Row
                    initial={{
                        alignment: 'left',
                    }}
                    css={{
                        background: 'darkgray',
                    }}
                >
                    <Column
                        initial={{
                            ratio: [1, 3],
                        }}
                        breakpoints={[
                            {ratio: [1, 3]},
                            {ratio: [1, 3]},
                        ]}
                        css={{
                            background: 'lightslategrey',
                        }}
                    >
                        Column 1
                    </Column>
                    <Column
                        initial={{
                            ratio: [2, 3],
                        }}
                        breakpoints={[
                            {ratio: [2, 3]},
                            {ratio: [2, 3]},
                        ]}
                        css={{
                            background: 'lightslategrey',
                        }}
                    >
                        Column 2
                    </Column>
                </Row>
                <Row
                    initial={{
                        alignment: 'left',
                    }}
                    css={{
                        background: 'darkgray',
                    }}
                >
                    <Column
                        initial={{
                            ratio: [1, 1],
                            gutterBleed: -20,
                            flexGrow: 1,
                        }}
                        breakpoints={[
                            {
                                ratio: [1, 1],
                                gutterBleed: -20,
                                flexGrow: 1,
                            },
                            {
                                ratio: [1, 1],
                                gutterBleed: -20,
                                flexGrow: 1,
                            },
                        ]}
                        css={{
                            background: 'lightslategrey',
                        }}
                    >
                        Column 1
                    </Column>
                </Row>
                <Row
                    initial={{
                        alignment: 'left',
                    }}
                    css={{
                        background: 'darkgray',
                    }}
                >
                    <Column
                        initial={{
                            ratio: [1, 2],
                        }}
                        breakpoints={[
                            {ratio: [1, 2]},
                            {ratio: [1, 2]},
                        ]}
                        css={{
                            background: 'lightslategrey',
                        }}
                    >
                        <Row
                            initial={{
                                alignment: 'left',
                            }}
                            css={{
                                background: 'white',
                            }}
                        >
                            <Column
                                initial={{
                                    ratio: [1, 1],
                                    gutterOverride: [0, 0, 5, 0],
                                    flexGrow: 1,
                                }}
                                breakpoints={[
                                    {
                                        ratio: [1, 1],
                                        gutterOverride: [0, 0, 5, 0],
                                        flexGrow: 1,
                                    },
                                    {
                                        ratio: [1, 1],
                                        gutterOverride: [0, 0, 5, 0],
                                        flexGrow: 1,
                                    },
                                ]}
                                css={{
                                    background: 'yellow',
                                }}
                            >
                                Column 1
                            </Column>
                            <Column
                                initial={{
                                    ratio: [1, 1],
                                    gutterOverride: [5, 0, 0, 0],
                                    flexGrow: 1,
                                }}
                                breakpoints={[
                                    {
                                        ratio: [1, 1],
                                        gutterOverride: [5, 0, 0, 0],
                                        flexGrow: 1,
                                    },
                                    {
                                        ratio: [1, 1],
                                        gutterOverride: [5, 0, 0, 0],
                                        flexGrow: 1,
                                    },
                                ]}
                                css={{
                                    background: 'lightslategrey',
                                }}
                            >
                                Column 2
                            </Column>
                        </Row>
                    </Column>
                    <Column
                        initial={{
                            ratio: [1, 2],
                        }}
                        breakpoints={[
                            {ratio: [1, 2]},
                            {ratio: [1, 2]},
                        ]}
                        css={{
                            background: 'lightslategrey',
                        }}
                    >
                        Large Column!
                    </Column>
                </Row>
                <Row
                    initial={{
                        alignment: 'left',
                    }}
                    css={{
                        background: 'darkgray',
                    }}
                >
                    <Column
                        initial={{
                            ratio: [1, 3],
                        }}
                        breakpoints={[
                            {ratio: [1, 3]},
                            {ratio: [1, 3]},
                        ]}
                        css={{
                            background: 'lightslategrey',
                        }}
                    >
                        Column 1
                    </Column>
                </Row>
                <Row
                    initial={{
                        alignment: 'left',
                    }}
                >
                    <Column
                        initial={{
                            ratio: [1, 1],
                        }}
                        breakpoints={[
                            {ratio: [1, 1]},
                            {ratio: [1, 1]},
                        ]}
                        css={{
                            background: '#ccc',
                        }}
                    >
                        Fluid
                    </Column>
                    <Column
                        initial={{
                            ratio: [1, 1],
                        }}
                        breakpoints={[
                            {ratio: [1, 1]},
                            {ratio: [1, 1]},
                        ]}
                        css={{
                            background: '#ccc',
                        }}
                    >
                        Fixed
                    </Column>
                </Row>
            </Grid>
        )
    )
)