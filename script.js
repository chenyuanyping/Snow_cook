// 菜品数据
const menuData = [
    {
        id: 1,
        name: "宫保鸡丁",
        description: "经典川菜，鸡肉嫩滑，花生酥脆，酸甜微辣",
        category: "热菜"
    },
    {
        id: 2,
        name: "麻婆豆腐",
        description: "四川名菜，豆腐嫩滑，麻辣鲜香",
        category: "热菜"
    },
    {
        id: 3,
        name: "糖醋排骨",
        description: "酸甜可口，肉质鲜美，老少皆宜",
        category: "热菜"
    },
    {
        id: 4,
        name: "蒸蛋羹",
        description: "嫩滑如丝，营养丰富，适合老人小孩",
        category: "汤品"
    },
    {
        id: 5,
        name: "白切鸡",
        description: "清淡爽口，肉质鲜嫩，配特制蘸料",
        category: "凉菜"
    },
    {
        id: 6,
        name: "西红柿鸡蛋汤",
        description: "清爽开胃，营养搭配，家常美味",
        category: "汤品"
    },
    {
        id: 7,
        name: "红烧肉",
        description: "肥瘦相间，色泽红润，入口即化",
        category: "热菜"
    },
    {
        id: 8,
        name: "凉拌黄瓜",
        description: "清脆爽口，解腥去腻，开胃小菜",
        category: "凉菜"
    }
];

// 购物车数据
let cart = [];

// DOM 元素
const menuGrid = document.getElementById('menuGrid');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const totalPrice = document.getElementById('totalPrice');
const submitOrder = document.getElementById('submitOrder');

// 模态框元素
const dishModal = document.getElementById('dishModal');
const orderModal = document.getElementById('orderModal');
const closeModal = document.getElementById('closeModal');
const closeOrderModal = document.getElementById('closeOrderModal');

// 模态框内的元素
const modalDishName = document.getElementById('modalDishName');
const modalDishDesc = document.getElementById('modalDishDesc');
const modalDishPrice = document.getElementById('modalDishPrice');
const dishNotes = document.getElementById('dishNotes');
const shareLinks = document.getElementById('shareLinks');
const quantity = document.getElementById('quantity');
const decreaseQty = document.getElementById('decreaseQty');
const increaseQty = document.getElementById('increaseQty');
const addToCart = document.getElementById('addToCart');

// 订单模态框元素
const orderSummary = document.getElementById('orderSummary');
const orderNotes = document.getElementById('orderNotes');
const confirmOrder = document.getElementById('confirmOrder');

// 当前选择的菜品
let currentDish = null;

// 初始化页面
function init() {
    renderMenu();
    renderCart();
    setupEventListeners();
}

// 渲染菜单
function renderMenu() {
    menuGrid.innerHTML = '';
    menuData.forEach(dish => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <h3>${dish.name}</h3>
            <p class="description">${dish.description}</p>
        `;
        menuItem.addEventListener('click', () => openDishModal(dish));
        menuGrid.appendChild(menuItem);
    });
}

// 打开菜品详情模态框
function openDishModal(dish) {
    currentDish = dish;
    modalDishName.textContent = dish.name;
    modalDishDesc.textContent = dish.description;
    
    // 重置表单
    dishNotes.value = '';
    shareLinks.value = '';
    quantity.textContent = '1';
    
    dishModal.style.display = 'block';
}

// 关闭模态框
function closeModals() {
    dishModal.style.display = 'none';
    orderModal.style.display = 'none';
}

// 数量控制
function updateQuantity(change) {
    const currentQty = parseInt(quantity.textContent);
    const newQty = Math.max(1, currentQty + change);
    quantity.textContent = newQty;
}

// 添加到购物车
function addDishToCart() {
    if (!currentDish) return;
    
    const cartItem = {
        id: Date.now(), // 使用时间戳作为唯一ID
        dish: currentDish,
        quantity: parseInt(quantity.textContent),
        notes: dishNotes.value.trim(),
        shareLink: shareLinks.value.trim()
    };
    
    cart.push(cartItem);
    renderCart();
    closeModals();
    
    // 显示成功提示
    showSuccessMessage(`已添加 ${currentDish.name} 到购物车`);
}

// 从购物车移除商品
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    renderCart();
}

// 渲染购物车
function renderCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">购物车为空</div>';
        cartCount.textContent = '(0)';
        submitOrder.disabled = true;
        return;
    }
    
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        let linksHtml = '';
        if (item.shareLink) {
            linksHtml = `<div class="cart-item-links">🔗 <a href="${item.shareLink}" target="_blank">查看分享链接</a></div>`;
        }
        
        let notesHtml = '';
        if (item.notes) {
            notesHtml = `<div class="cart-item-notes">📝 ${item.notes}</div>`;
        }
        
        cartItem.innerHTML = `
            <div class="cart-item-header">
                <span class="cart-item-name">${item.dish.name}</span>
            </div>
            <div class="cart-item-details">数量: ${item.quantity}</div>
            ${notesHtml}
            ${linksHtml}
            <button class="remove-item" onclick="removeFromCart(${item.id})">删除</button>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartCount.textContent = `(${cart.length})`;
    submitOrder.disabled = false;
}

// 显示成功消息
function showSuccessMessage(message) {
    // 移除已有的成功消息
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    
    // 插入到容器顶部
    const container = document.querySelector('.container');
    container.insertBefore(successDiv, container.firstChild);
    
    // 3秒后自动移除
    setTimeout(() => {
        if (successDiv.parentNode) {
            successDiv.remove();
        }
    }, 3000);
}

// 打开订单确认模态框
function openOrderModal() {
    if (cart.length === 0) return;
    
    // 生成订单摘要
    let summaryHtml = '<h4>订单详情:</h4>';
    
    cart.forEach(item => {
        summaryHtml += `
            <div style="margin-bottom: 10px; padding: 8px; background: #f0f0f0; border-radius: 4px;">
                <strong>${item.dish.name}</strong> × ${item.quantity}
                ${item.notes ? `<br><small>备注: ${item.notes}</small>` : ''}
                ${item.shareLink ? `<br><small>分享: <a href="${item.shareLink}" target="_blank">链接</a></small>` : ''}
            </div>
        `;
    });
    
    orderSummary.innerHTML = summaryHtml;
    
    // 清空订单备注
    orderNotes.value = '';
    
    orderModal.style.display = 'block';
}

// 确认订单
function submitOrderData() {
    // 构建订单数据
    const orderData = {
        timestamp: new Date().toLocaleString('zh-CN'),
        items: cart.map(item => ({
            dishName: item.dish.name,
            quantity: item.quantity,
            notes: item.notes,
            shareLink: item.shareLink
        })),
        orderNotes: orderNotes.value.trim()
    };
    
    // 保存到本地存储
    const existingOrders = JSON.parse(localStorage.getItem('orderHistory')) || [];
    existingOrders.push(orderData);
    localStorage.setItem('orderHistory', JSON.stringify(existingOrders));
    
    // 这里可以发送订单到服务器
    console.log('订单数据:', orderData);
    
    // 模拟订单提交成功
    alert(`订单提交成功！\n订单号: ${Date.now()}\n已保存到页面！`);
    
    // 清空购物车
    cart = [];
    renderCart();
    closeModals();
    
    showSuccessMessage('订单提交成功！已保存到页面。');
}

// 设置事件监听器
function setupEventListeners() {
    // 模态框关闭
    closeModal.addEventListener('click', closeModals);
    closeOrderModal.addEventListener('click', closeModals);
    
    // 点击模态框外部关闭
    window.addEventListener('click', (e) => {
        if (e.target === dishModal || e.target === orderModal) {
            closeModals();
        }
    });
    
    // 数量控制
    decreaseQty.addEventListener('click', () => updateQuantity(-1));
    increaseQty.addEventListener('click', () => updateQuantity(1));
    
    // 添加到购物车
    addToCart.addEventListener('click', addDishToCart);
    
    // 提交订单
    submitOrder.addEventListener('click', openOrderModal);
    confirmOrder.addEventListener('click', submitOrderData);
    
    // 键盘快捷键
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModals();
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);