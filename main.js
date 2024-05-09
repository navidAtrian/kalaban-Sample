const titleInit = (data) => {
    const value = data.value.split(',')[0];
    const link = data.value.split(',')[1];
    const cellContainer = document.createElement("div");
    let cellImage = document.createElement("img");
    let cellText = document.createElement("span");
    cellContainer.className = "cell-container";
    cellImage.className = "cell-image";
    cellText.className = "cell-text";
    cellText.textContent = value;
    cellImage.src = link;
    cellContainer.appendChild(cellImage);
    cellContainer.appendChild(cellText);

    return cellContainer;
}

const subscribeInit = (data) => {
    const value = data.value
    const cellContainer = document.createElement("div");
    const valueContainer = document.createElement("div");
    const valueText = document.createElement("span");
    const cellText = document.createElement("span");
    cellContainer.className = "cell-container";
    valueContainer.className = "value-container";
    valueText.className = "value-text";
    cellText.className = "cell-text";
    valueText.textContent = value;
    cellText.textContent = value === 1
        ? "نسخه حرفه ای"
        : `نسخه تیمی ${value} نفره`;
    valueContainer.appendChild(valueText);
    cellContainer.appendChild(valueContainer);
    cellContainer.appendChild(cellText);

    return cellContainer;
}

const createAtInit = (date) => {
    return new Intl.DateTimeFormat(
        'fa-IR',
        { dateStyle: "short", timeStyle: "short" }
    ).format(new Date(date.data.createdAt))
}



class newTeamButton {
    init(params) {
        this.eGui = document.createElement('div');
        this.eGui.classList.add('button-header-container');
        let button = document.createElement("button");
        button.className = "new-team-button";
        button.textContent = "New Team";
        this.eventListener = () => alert("New Team clicked");
        button.addEventListener("click", this.eventListener);
        this.eGui.appendChild(button);
    }

    getGui() {
        return this.eGui;
    }

    refresh(params) {
        return false;
    }
}


class sendPushButton {
    init(params) {
        this.eGui = document.createElement('div');
        this.eGui.classList.add('button-filter-container');
        const buttonContainer = document.createElement("div");
        const buttonImage = document.createElement("img");
        const buttonText = document.createElement("span");
        buttonContainer.className = "send-push-button";
        buttonImage.className = "button-image";
        buttonText.className = "button-text";
        buttonText.textContent = "Send Push";
        buttonImage.src = './chat_icon.png';
        buttonContainer.appendChild(buttonImage);
        buttonContainer.appendChild(buttonText);
        this.eventListener = () => alert("Send Push clicked");
        buttonContainer.addEventListener("click", this.eventListener);
        this.eGui.appendChild(buttonContainer);
    }

    getGui() {
        return this.eGui;
    }

    refresh(params) {
        return false;
    }
}

const webShopInit = (item) => {
    const plan = item.data.webshopPlan;
    const status = item.data.webshopStatus;
    const cellContainer = document.createElement("div");
    let cellIconContainer = document.createElement("div");
    let cellText = document.createElement("span");
    cellContainer.className = "cell-container";
    cellText.className = plan === 'demo' ? "shop-cell-text-demo" :
        status === 'expired' ? "shop-cell-text-expire" : "shop-cell-text";
    cellText.textContent =
        plan === 'demo' ? 'آزمایشی' :
            plan === 'silver' ? 'نقره ای' :
                plan === 'gold' ? 'طلایی' :
                    'فاقد طرح';
    if (status === 'expired') {
        cellIconContainer.innerHTML = `<i class="fa fa-calendar-times-o expire" aria-hidden="true"/>`
        cellContainer.appendChild(cellIconContainer)
    };
    if (plan === 'demo') {
        cellIconContainer.innerHTML = `<i class="fa fa-exclamation-triangle demo" aria-hidden="true" />`
        cellContainer.appendChild(cellIconContainer)
    };
    if (status === 'expired' && plan === 'demo') {
        cellIconContainer.innerHTML =
            `<i class="fa fa-calendar-times-o expire" aria-hidden="true"/>
        <i class="fa fa-exclamation-triangle demo" aria-hidden="true" />`
        cellContainer.appendChild(cellIconContainer)
    };
    cellContainer.appendChild(cellText);
    return cellContainer;
}

const expireInit = (item) => {
    const expireDate = moment(item.data.subscriptionExpiry);
    const now = moment()
    const days = expireDate.diff(now, 'days')
    const cellContainer = document.createElement("div");
    let cellIconContainer = document.createElement("div");
    let cellText = document.createElement("span");
    cellContainer.className = "cell-container";
    cellText.className = Number(days) > 0 ? "expire-cell-text" :
        "expired-cell-text";
    cellText.textContent = Number(days) > 0 ? days : 'منقضی';
    if (Number(days) <= 0) {
        cellIconContainer.innerHTML = `<i class="fa fa-calendar-times-o expired_icon" aria-hidden="true"/>`
        cellContainer.appendChild(cellIconContainer)
    };
    cellContainer.appendChild(cellText);
    return cellContainer;
}

const notifyInit = () => {
    const cellContainer = document.createElement("div");
    let cellIconContainer = document.createElement("div");
    cellIconContainer.innerHTML = `<i class="fa fa-bug notify" aria-hidden="true"/>`
    cellContainer.appendChild(cellIconContainer)
    return cellContainer;
}




// Grid Options: Contains all of the data grid configurations
const gridOptions = {
    // Row Data: The data to be displayed.
    rowData: [
        {
            title: "کالابان,https://w7.pngwing.com/pngs/314/994/png-transparent-person-confused-miscellaneous-tshirt-cartoon.png",
            teamCapacity: 3,
            createdAt: '2022-12-15T15:10:30',
            lastSupport: '-',
            webshopPlan: 'demo',
            webshopStatus: 'active',
            subscriptionExpiry: '2024-12-15T15:10:30'
        },
        {
            title: "Tesla.ir,https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
            teamCapacity: 1,
            createdAt: '2021-10-15T17:15:25',
            lastSupport: '-',
            webshopPlan: 'silver',
            webshopStatus: 'active',
            subscriptionExpiry: '2025-09-10T15:10:30'
        },
        {
            title: "کالابان195653,https://w7.pngwing.com/pngs/314/994/png-transparent-person-confused-miscellaneous-tshirt-cartoon.png",
            teamCapacity: 6,
            createdAt: '2021-08-03T11:46:17',
            lastSupport: '-',
            webshopPlan: 'demo',
            webshopStatus: 'expired',
            subscriptionExpiry: '2023-01-07T15:10:30'
        },
        {
            title: "پوشاک لیلیوم,https://cdn.iconscout.com/icon/free/png-256/free-gallery-187-902099.png?f=webp",
            teamCapacity: 10,
            createdAt: '2022-04-23T07:48:10',
            lastSupport: '-',
            webshopPlan: 'gold',
            webshopStatus: 'expired',
            subscriptionExpiry: '2021-11-20T15:10:30'
        },
        {
            title: "پویا,https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
            teamCapacity: 1,
            createdAt: '2022-03-30T03:20:43',
            lastSupport: '-',
            webshopPlan: 'gold',
            webshopStatus: 'active',
            subscriptionExpiry: '2024-10-01T15:10:30'
        },
        {
            title: "کالابان1919,https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Circle-icons-image.svg/800px-Circle-icons-image.svg.png",
            teamCapacity: 4,
            createdAt: '2022-06-07T09:14:17',
            lastSupport: '-',
            webshopPlan: 'demo',
            webshopStatus: 'active',
            subscriptionExpiry: '2024-08-30T15:10:30'
        },
        {
            title: "رافع,https://cdn.iconscout.com/icon/free/png-256/free-gallery-187-902099.png?f=webp",
            teamCapacity: 4,
            createdAt: '2021-09-26T14:39:15',
            lastSupport: '-',
            webshopPlan: 'silver',
            webshopStatus: 'active',
            subscriptionExpiry: '2024-06-24T15:10:30'
        },
        {
            title: "تاکسی اپس,https://cdn.iconscout.com/icon/free/png-256/free-gallery-187-902099.png?f=webp",
            teamCapacity: 4,
            createdAt: '2022-04-17T08:37:14',
            lastSupport: '-',
            webshopPlan: 'silver',
            webshopStatus: 'expired',
            subscriptionExpiry: '2022-07-02T15:10:30'
        },

    ],
    // Column Definitions: Defines the columns to be displayed.
    defaultColDef: {
        filter: "agTextColumnFilter",
        floatingFilter: true,
    },
    columnDefs: [
        {
            headerName: "نام تیم",
            valueGetter: (p) => p.data.title,
            flex: 3,
            filter: true,
            cellRenderer: titleInit,
            icons: {
                filter: '<i class="fa fa-filter"/>',
            },
        },
        {
            headerName: "اشتراک",
            valueGetter: (p) => p.data.teamCapacity,
            flex: 3,
            filter: true,
            cellRenderer: subscribeInit,
            icons: {
                filter: '<i class="fa fa-filter"/>',
            },
        },
        {
            headerName: "تاریخ ایجاد",
            valueGetter: createAtInit,
            flex: 1,
            minWidth: 120,
            filter: true,
            sort: 'desc',
            icons: {
                filter: '<i class="fa fa-filter"/>',
            },
        },
        {
            headerName: "آخرین تماس پشتیبانی",
            valueGetter: (p) => p.data.lastSupport,
            flex: 1,
            filter: true,
            icons: {
                filter: '<i class="fa fa-filter"/>',
            },
        },
        {
            headerName: "وب شاپ",
            cellRenderer: webShopInit,
            flex: 1,
            filter: true,
            icons: {
                filter: '<i class="fa fa-filter"/>',
            },
        },
        {
            headerName: "اعتبار (روز)",
            cellRenderer: expireInit,
            filter: false,
            flex: 1,

        },
        {
            floatingFilterComponent: sendPushButton,
            flex: 1,
            minWidth: 120,
            headerComponent: newTeamButton,
            suppressHeaderMenuButton: true,
            sortable: false,
            icons: {
                filter: ' ',
            },
            cellRenderer: notifyInit
        }
    ],

    suppressRowClickSelection: true,
    rowSelection: "multiple",
};

// Javascript code to create the data grid
const myGridElement = document.querySelector('#myGrid');
agGrid.createGrid(myGridElement, gridOptions);