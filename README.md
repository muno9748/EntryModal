# Entry Modal (CloneCoding)

Usage:
```js
new Entry.Modal(/* ID AutoSetting */'auto', {
        title: 'SANS'
        events: {
                readyEvent(use) {
                        use('addField', {
                                title: 'WA',
                                desc: 'SANS',
                                background: /* SANS image */ 'https://lh3.googleusercontent.com/proxy/F1ff7SspR1GabIpn6is7NV9qYOkpuvOf7B6Ub7Wkgy-X8jERKql2w3JjleeuUwRWaMsCHCswVtstNXWDwavgfg6dAfbZyhNCLBM3PZRZrhnjAD5sY4U'
                        });
                },
                confirmEvent(items, body, removeBody) {
                        console.log('Items selected: ', items);
                        removeBody(); // Don't use body.remove()
                }
        }
})
```

result:
<img src="https://github.com/muno9748/EntryModal/raw/master/result.jpg" />
