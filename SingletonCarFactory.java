public class SingletonCarFactory {
    
    public int totalCars;
    public static SingletonCarFactory instancy;
    
    private SingletonCarFactory(){ //Construtor Privado
        
    }
        
    public Car buildCar(String model, String category){
        
        Car car = new Car();
        car.setModel(model);
        car.setCategory(category);
        
        totalCars++;  
        
        return car;
    }
    
     public static SingletonCarFactory getInstancy() {
        if (instancy == null)
            instancy = new SingletonCarFactory();
        return instancy;
    }
     
     public String getTotal(){
         
         return "Total de carros Criados: " + totalCars;

     }
    
    
}
