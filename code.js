/* global fetch, cytoscape, document, window */
(function () {

    window.cy = cytoscape({
        container: document.getElementById('cy'),

        layout: {
            name: 'cose',
            padding: 100,
            spacingFactor: 5,
            randomize: true,
        },

        style: [
            {
                "selector": "node[label]",
                "style": {
                    "label": "data(label)",
                    "font-size": "10px"
                }
            },
            {
                "selector": "edge[label]",
                "style": {
                    "label": "data(label)",
                    "width": 3,
                    "font-size": "10px"
                }
            },
        ],
        elements: [
            // nodes
            {data: {id: 'serhat', label: 'serhat'}},
            {data: {id: 'osman', label: 'osman'}},
            {data: {id: 'defne', label: 'defne'}},
            {data: {id: 'mustafa', label: 'mustafa'}},
            {data: {id: 'buket', label: 'buket'}},
            {data: {id: 'melisa', label: 'melisa'}},
            {data: {id: 'bilge', label: 'bilge'}},
            // edges
            {data: {source: 'mustafa', target: 'melisa', label: 'baba'}},
            {data: {source: 'buket', target: 'melisa', label: 'anne'}},
            {data: {source: 'bilge', target: 'buket', label: 'Kardes'}},
            {data: {source: 'osman', target: 'buket', label: 'kuzen'}},
            {data: {source: 'defne', target: 'mustafa', label: 'yegen'}},
        ]
    });
})();