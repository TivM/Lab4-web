export const isTriangle = (x, y, r) => {
    if(r<0){
        if (x <= Math.abs(r) && x>=0 && y<=0 && y>= -Math.abs(r) && y>=(x-Math.abs(r))) {
            return true;
        }
        return false;
    }
    else{
        if (x >= -Math.abs(r) && x<=0 && y>=0 && y<=Math.abs(r) && y<=(x+Math.abs(r))) {
            return true;
        }
        return false;
    }
}

export const isRectangle = (x, y, r) => {
    if(r<0){
        if (x <= Math.abs(r) && x>=0 && y>=0 && y<=Math.abs(r)/2) {
            return true;
        }
        return false;
    }
    else{
        if (x >= -Math.abs(r) && x<=0 && y<=0 && y>=-Math.abs(r)/2) {
            return true;
        }
        return false;
    }
}

export const isCircle = (x, y, r) => {
    if(r<0){
        if (x*x+y*y<=Math.abs(r)*Math.abs(r) && y>=0 && x<=0) {
            return true;
        }
        return false;
    }
    else{
        if (x*x+y*y<=Math.abs(r)*Math.abs(r) && y<=0 && x>=0) {
            return true;
        }
        return false;
    }
}

export const hitCheck = (x, y, r) => {
    if (isTriangle(x, y, r) || isCircle(x, y, r) || isRectangle(x, y, r)) {
        return true;
    }
    return false;
}
