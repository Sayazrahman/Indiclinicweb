import React, { useState } from 'react'
import Select from 'react-select';
export default function Billing() {
let rowdata = {
    itemName : null,
    itemCharge : 0,
    itemQuantity : 0,
    discountPer : 0 ,
    discountRs : 0,
    rowTotal : 0

}

const [itemState, setitemState] = useState([rowdata])
const [actualTotalaAmount, setactualTotalaAmount] = useState(0)
const [TotalDiscountRs, setTotalDiscountRs] = useState(0)
const [TotalPayableAmount, setTotalPayableAmount] = useState(0)

    const medicinesData = [
        { itemId: 1, name: 'Paracetamol', price: 10 },
        { itemId: 2, name: 'Ibuprofen', price: 15 },
        { itemId: 3, name: 'Aspirin', price: 12 },
        { itemId: 4, name: 'Ciprofloxacin', price: 20 },
        { itemId: 5, name: 'Amoxicillin', price: 18 },
        { itemId: 6, name: 'Lisinopril', price: 25 },
        { itemId: 7, name: 'Atorvastatin', price: 30 },
        { itemId: 8, name: 'Omeprazole', price: 22 },
        { itemId: 9, name: 'Metformin', price: 28 },
        { itemId: 10, name: 'Simvastatin', price: 32 },
        { itemId: 11, name: 'Hydrochlorothiazide', price: 15 },
        { itemId: 12, name: 'Escitalopram', price: 40 },
        { itemId: 13, name: 'Montelukast', price: 18 },
        { itemId: 14, name: 'Levothyroxine', price: 25 },
        { itemId: 15, name: 'Cetirizine', price: 12 },
        { itemId: 16, name: 'Diazepam', price: 35 },
        { itemId: 17, name: 'Warfarin', price: 28 },
        { itemId: 18, name: 'Gabapentin', price: 20 },
        { itemId: 19, name: 'Metoprolol', price: 30 },
        { itemId: 20, name: 'Prednisone', price: 25 },
        { itemId: 21, name: 'Ranitidine', price: 15 },
        { itemId: 22, name: 'Amlodipine', price: 22 },
        { itemId: 23, name: 'Cephalexin', price: 18 },
        { itemId: 24, name: 'Furosemide', price: 12 },
        { itemId: 25, name: 'Clonazepam', price: 35 },
        { itemId: 26, name: 'Sertraline', price: 40 },
        { itemId: 27, name: 'Methotrexate', price: 28 },
        { itemId: 28, name: 'Fluoxetine', price: 22 },
        { itemId: 29, name: 'Alprazolam', price: 38 },
        { itemId: 30, name: 'Duloxetine', price: 45 },
      ];

        const options = medicinesData.map((medicine) => ({
          value: medicine.itemId,
          label: `${medicine.name}`,
          price: medicine.price,
          itemId : medicine.itemId
        }));


        const handleAddRow = () => {
            setitemState((prevItemState) => [
              ...prevItemState,
              {
                itemName: null,
                itemCharge: 0,
                itemQuantity: 0,
                discountPer: 0,
                discountRs: 0,
                rowTotal: 0,
              },
            ]);
          };

          const handleDeleteRow = (index) => {
            setitemState((prevItemState) => {
              const updatedItemState = [...prevItemState];
              updatedItemState.splice(index, 1);
              return updatedItemState;
            });
          };


          const handleItemChange = (selectedOption, index) => {
            setitemState((prevItemState) => {
              const updatedItemState = [...prevItemState];
              updatedItemState[index].itemName = selectedOption;
              updatedItemState[index].itemId = selectedOption.itemId;
              updatedItemState[index].itemCharge = selectedOption.price; 
              updatedItemState[index].itemQuantity = 1; 
              updatedItemState[index].rowTotal =  updatedItemState[index].itemQuantity * updatedItemState[index].itemCharge; 

              console.log("Item Name:", selectedOption);
              
              const totalAmount = itemState.reduce((total, item) => total + item.itemCharge * item.itemQuantity, 0);
              setactualTotalaAmount(totalAmount);
             
              const totalDiscountAmount = itemState.reduce((total, item) => total + item.discountRs , 0);
              setTotalDiscountRs(totalDiscountAmount)
              setactualTotalaAmount(totalAmount);
              setTotalPayableAmount(totalAmount - totalDiscountAmount)
              return updatedItemState;
            });
          };


const handleCalculations=(e, index)=>{
  const {name , value} = e.target
let rowCopyData = [...itemState]
  if (name === 'itemQuantity'){
   rowCopyData[index].itemQuantity = value
   rowCopyData[index].rowTotal = rowCopyData[index].itemQuantity * rowCopyData[index].itemCharge - rowCopyData[index].discountRs
   const totalAmount = itemState.reduce((total, item) => total + item.itemCharge * item.itemQuantity, 0);
   const totalDiscountAmount = itemState.reduce((total, item) => total + item.discountRs , 0);
   setTotalDiscountRs(totalDiscountAmount)
   setactualTotalaAmount(totalAmount);
   setTotalPayableAmount(totalAmount - totalDiscountAmount)

  }
if (name === "discountper"){
  rowCopyData[index].discountPer = value
  rowCopyData[index].rowTotal =  (rowCopyData[index].itemCharge * rowCopyData[index].itemQuantity) * value / 100
  rowCopyData[index].discountRs =  (rowCopyData[index].itemCharge * rowCopyData[index].itemQuantity)/100 * value 
  const totalDiscountAmount = itemState.reduce((total, item) => total + item.discountRs , 0);
  setTotalDiscountRs(totalDiscountAmount)
  const totalAmount = itemState.reduce((total, item) => total + item.itemCharge * item.itemQuantity, 0);
 
  setTotalDiscountRs(totalDiscountAmount)
  setactualTotalaAmount(totalAmount);
  setTotalPayableAmount(totalAmount - totalDiscountAmount)
  if(value == ""|| parseInt(value) === 0){
    rowCopyData[index].rowTotal = rowCopyData[index].itemCharge * rowCopyData[index].itemQuantity
  }

}
if(name === 'discountRs'){
  rowCopyData[index].discountRs = value
  rowCopyData[index].rowTotal =(rowCopyData[index].itemCharge * rowCopyData[index].itemQuantity) - rowCopyData[index].discountRs
  rowCopyData[index].discountPer =(rowCopyData[index].discountRs / rowCopyData[index].itemCharge) *  100
 
}

   setitemState(rowCopyData);
}
const savebill = () => {

  const rowDataArray = itemState.map((item) => ({
    itemName: item.itemName,
    itemCharge: item.itemCharge,
    itemQuantity: item.itemQuantity,
    discountPer: item.discountPer,
    discountRs: item.discountRs,
    rowTotal: item.rowTotal,
  }));



 
  const billData = {
    rows: rowDataArray,
    totalDiscountRs: TotalDiscountRs,
    totalPayableAmount: TotalPayableAmount,
    totalAmount: actualTotalaAmount,
  };


  const jsonData = JSON.stringify(billData);

  localStorage.setItem('billData', jsonData);

 
};

  return (
 <>
 
 <div className='conatiner'>
<table className='table'>
    <thead>
        <tr>
            <td>#</td>
            <td>Item</td>
            <td>Charge (Rs)</td>
            <td>Item Quantity</td>
            <td>Discount %</td>
            <td>Discount Rs</td>
            <td>Total Amount</td>
            <td>Actions</td>
        </tr>
    </thead>
    <tbody>
        {itemState && itemState.map((val , index)=>{
            return (
                <>
                
                 <tr key={val.id} >
                    <td>{index + 1}</td>
            <div style={{width : '10rem'}}><Select  value={val.itemName}  onChange={(selectedOption) => handleItemChange(selectedOption, index)} options={options} placeholder="Select Item"  /></div>
            <td><input type='text' value = {val.itemCharge} placeholder='Charge' disabled /></td>
            <td><input type='text' name='itemQuantity' onChange={(e)=>handleCalculations(e,index)} value={val.itemQuantity} placeholder='Item Quantity' /></td>
            <td><input type='text' name='discountper'onChange={(e)=>handleCalculations(e,index)}  value={val.discountPer} placeholder='Discount %' /></td>
            <td><input type='text' name='discountRs' onKeyDown={handleAddRow} onChange={(e)=>handleCalculations(e,index)}   value={val.discountRs} placeholder='Discount Rs' /></td>
            <td><input type='text' value={val.rowTotal} placeholder='Total Amount' disabled /></td>
            <td><i class="bi bi-plus-circle me-1" onClick={handleAddRow} style={{cursor: 'pointer'}} ></i>
            <i class="bi bi-trash3" style={{cursor: 'pointer'}} onClick={handleDeleteRow}></i></td>
         
        </tr>
                </>
            )
        })}
       
    </tbody>
</table>

<section className='mt-5' style={{float : 'right'}}>
  <div className='card '>
    <h6>Total Amount : {actualTotalaAmount} </h6>
    <h6>Total  Discount (Rs) : {TotalDiscountRs} </h6>
    <h6>Total  Payable after Discount: {TotalPayableAmount}</h6>
  </div>
  <button className='btn btn-primary mt-5' onClick={savebill}>Save</button>
</section>
 </div>
 
 </>
  )
}
