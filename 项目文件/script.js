
  // 定义一个函数来创建表格
    function createTable(data) {
      const table = document.createElement('table');
      const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');
      table.appendChild(thead);
      table.appendChild(tbody);
  
      // 创建表头
      const headerRow = document.createElement('tr');
      let i = 0;
      while (i < data.headers.length) 
      {
        const th = document.createElement('th');
        let colspan = 1;
        while (i + colspan < data.headers.length && data.headers[i] === data.headers[i + colspan]) 
        {
          colspan++;
        }
        th.colSpan = colspan;
        th.textContent = data.headers[i];
        headerRow.appendChild(th);
        i += colspan;
      }
      thead.appendChild(headerRow);
  
      // 创建表体
      for (const row of data.rows) 
      {
        const tr = document.createElement('tr');
        for (const cell of row) 
        {
          const td = document.createElement('td');
          if (typeof cell === 'object' && cell.type === 'image') 
          {
            // 如果单元格数据是一个对象且类型为'image'，则插入图片
            const img = document.createElement('img');
            img.src = cell.url;
            img.alt = cell.alt || '图片';
            td.appendChild(img);
          }
          else 
          {
          td.textContent = cell;
          }
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }
  
      return table;
    }
    // 定义按钮点击事件处理函数
    function showTable(event) 
    {
      const tables = 
      [
        { headers: ['红色', '红色','蓝色','蓝色','绿色','绿色'], 
          rows: [['160cm',{type:'image',url:'红马面.jpg'} ,
                  '160cm',{type:'image',url:'蓝色马面.jpg'},
                  '190cm',{type:'image',url:'绿马面.jpg'}], 
                 ['170cm',{type:'image',url:'红马面.jpg'} ,
                  '170cm',{type:'image',url:'蓝色马面.jpg'},
                  '190cm',{type:'image',url:'绿马面.jpg'}]] },
        { headers: ['红色', '红色','绿色','绿色','黄色','黄色'], 
          rows: [['160cm',{type:'image',url:'红齐胸.jfif'},
                  '160cm',{type:'image',url:'绿齐胸.jpg'},
                  '190cm',{type:'image',url:'黄齐胸.jfif'}], 
                 ['170cm',{type:'image',url:'红齐胸.jfif'},
                  '180cm',{type:'image',url:'绿齐胸.jpg'},
                  '190cm',{type:'image',url:'黄齐胸.jfif'}]] },
        { headers: ['绿色', '绿色','蓝色','蓝色',"粉色","粉色"], 
          rows: [['170cm',{type:'image',url:'绿色汉元素.webp'},
                  '170cm',{type:'image',url:'蓝色汉元素.jfif'},
                  '190cm',{type:'image',url:'粉色汉元素.webp'}], 
                 ['180cm',{type:'image',url:'绿色汉元素.webp'},
                  '180cm',{type:'image',url:'蓝色汉元素.jfif'},
                  '190cm',{type:'image',url:'粉色汉元素.webp'}]] },
        { headers: ['黑色', '黑色','白色','白色','橙色','橙色'], 
          rows: [['160cm',{type:'image',url:'黑色大袖衫.jpg'}, 
                  '170cm',{type:'image',url:'白色大袖衫.jpg'}, 
                  '190cm',{type:'image',url:'橙色大袖衫.webp'}], 
                 ['170cm', {type:'image',url:'黑色大袖衫.jpg'}, 
                  '180cm',{type:'image',url:'白色大袖衫.jpg'}, 
                  '190cm',{type:'image',url:'橙色大袖衫.webp'}]] },
      ];

         // 获取表格容器
         const container = document.getElementById('tableContainer');

         // 获取当前按钮的索引
         const tableIndex = event.target.id.replace('btnTable', '') - 1;
 
         // 移除所有按钮的 active 类
        document.querySelectorAll('button').forEach(button => {
          button.classList.remove('active');})

         // 检查当前按钮是否已经显示了表格
         const currentTable = container.querySelector('table');
         if (currentTable && currentTable.dataset.index === String(tableIndex)) {
             // 如果已经显示了当前按钮的表格，则隐藏表格
             container.innerHTML = '';} 
          else {
             // 否则，清除容器内容并显示对应表格
             container.innerHTML = '';
             const table = createTable(tables[tableIndex]);
             table.dataset.index = tableIndex; // 设置表格的索引以便后续判断
             container.appendChild(table);
             // 为当前按钮添加 active 类
            event.target.classList.add('active');
          }
     }
  
    // 为每个按钮添加点击事件监听器
    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', showTable);
    });
