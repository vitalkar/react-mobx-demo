import {observable, get} from 'mobx';

const dataService = (() => {
    console.log('service initiated');

    let values = observable([]);

    const init = () => setInterval(() => {
        const num = Math.ceil(Math.random() * 100);
        // values.push(num);
        values.replace([num])
        // values = [num];
        // values = values.slice();
        // values.slice();
    }, 3000);

    return {
        init,
        values,
    }
})();

export default dataService;