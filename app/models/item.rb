class Item

  # ==================================================
  #                      SET UP
  # ==================================================

  # # add attribute readers for instance access
  #   attr_reader :id, :title, :brand, :product, :description, :condition, :origin, :price, :image

  # connect to postgres
    if(ENV['DATABASE_URL'])
           uri = URI.parse(ENV['DATABASE_URL'])
           DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
       else
           DB = PG.connect(host: "localhost", port: 5432, dbname: 'ebuys_development')
       end


  # # initialize options hash
  #     def initialize(opts = {})
  #         @id = opts["id"].to_i
  #         @title = opts["title"]
  #         @brand = opts["brand"]
  #         @product = opts["product"]
  #         @description = opts["description"]
  #         @condition = opts["condition"]
  #         @origin = opts["origin"]
  #         @price = opts["price"].to_i
  #         @image = opts["image"]
  #     end



  # ==================================================
  #                      ROUTES
  # ==================================================

  # get all
  def self.all
    results = DB.exec("SELECT * FROM items;")
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "title" => result["title"],
        "brand" => result["brand"],
        "product" => result["image"],
        "description" => result["description"],
        "condition" => result["condition"],
        "origin" => result["origin"],
        "price" => result["price"].to_i,
        "image" => result["image"]
      }
    end
  end


  # get one by id
  def self.find(id)
    results = DB.exec("SELECT * FROM items WHERE id=#{id};")
    result = results.first
    return {
      "id" => result["id"].to_i,
      "title" => result["title"],
      "brand" => result["brand"],
      "product" => result["product"],
      "description" => result["description"],
      "condition" => result["condition"],
      "origin" => result["origin"],
      "price" => result["price"].to_i,
      "image" => result["image"]
    }
  end

# create
  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO items (title, brand, product, description, condition, origin, price, image)
        VALUES ('#{opts["title"]}', '#{opts["brand"]}', '#{opts["product"]}', '#{opts["description"]}', '#{opts["condition"]}', '#{opts["origin"]}', #{opts["price"]}, '#{opts["image"]}')
        RETURNING id, title, brand, product, description, condition, origin, price, image;
      SQL
    )
    result = results.first
    return {
      "id" => result["id"].to_i,
      "title" => result["title"],
      "brand" => result["brand"],
      "product" => result["product"],
      "description" => result["description"],
      "condition" => result["condition"],
      "origin" => result["origin"],
      "price" => result["price"].to_i,
      "image" => result["image"]
    }
  end

  # delete one by id
  def self.delete(id)
    results = DB.exec("DELETE FROM items WHERE id=#{id};")
    return {"deleted" => true}
  end

  # update item by id
  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE items
        SET
        title='#{opts["title"]}',
        brand='#{opts["brand"]}',
        product='#{opts["product"]}',
        description='#{opts["description"]}',
        condition='#{opts["condition"]}',
        origin='#{opts["origin"]}',
        price=#{opts["price"]},
        image='#{opts["image"]}'
        WHERE id=#{id}
        RETURNING id, title, brand, product, description, condition, origin, price, image;
      SQL
    )
    result = results.first
    return {
      "id" => result["id"].to_i,
      "title" => result["title"],
      "brand" => result["brand"],
      "product" => result["product"],
      "description" => result["description"],
      "condition" => result["condition"],
      "origin" => result["origin"],
      "price" => result["price"].to_i,
      "image" => result["image"]
    }
  end

end
